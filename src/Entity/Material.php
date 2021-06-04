<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\MaterialRepository;
use ApiPlatform\Core\Annotation\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=MaterialRepository::class)
 * @ApiResource(
 *  normalizationContext={"groups"={"material_read"}},
 *  normalizationContext={"groups"={"material_update"}}
 * )
 */
class Material
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"material_read", "component_read", "packaging_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"material_read", "component_read", "packaging_read", "packaging_update", "component_update", "material_update"})
     */
    private $name;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"material_read", "component_read", "packaging_read", "packaging_update", "component_update", "material_update"})
     */
    private $matter;

    /**
     * @ORM\Column(type="float")
     * @Groups({"material_read", "component_read", "packaging_read", "packaging_update", "component_update", "material_update"})
     */
    private $mass;

    /**
     * @ORM\Column(type="float")
     * @Groups({"material_read", "component_read", "packaging_read", "packaging_update", "component_update", "material_update"})
     */
    private $volume;

    /**
     * @ORM\ManyToOne(targetEntity=Component::class, inversedBy="materials")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"material_read"})
     */
    private $component;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getMatter(): ?string
    {
        return $this->matter;
    }

    public function setMatter(string $matter): self
    {
        $this->matter = $matter;

        return $this;
    }

    public function getMass(): ?float
    {
        return $this->mass;
    }

    public function setMass(float $mass): self
    {
        $this->mass = $mass;

        return $this;
    }

    public function getVolume(): ?float
    {
        return $this->volume;
    }

    public function setVolume(float $volume): self
    {
        $this->volume = $volume;

        return $this;
    }

    public function getComponent(): ?Component
    {
        return $this->component;
    }

    public function setComponent(?Component $component): self
    {
        $this->component = $component;

        return $this;
    }
}
