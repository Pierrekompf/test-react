<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\PackagingRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=PackagingRepository::class)
 * @ApiResource(
 *  normalizationContext={"groups"={"packaging_read"}},
 *  denormalizationContext={"groups"={"packaging_update"}}
 * )
 */
class Packaging
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"material_read", "component_read", "packaging_read", "packaging_update"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"material_read", "component_read", "packaging_read", "packaging_update"})
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Component::class, mappedBy="packaging")
     * @Groups({"packaging_read", "packaging_update"})
     */
    private $components;

    public function __construct()
    {
        $this->components = new ArrayCollection();
    }

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

    /**
     * @return Collection|Component[]
     */
    public function getComponents(): Collection
    {
        return $this->components;
    }

    public function addComponent(Component $component): self
    {
        if (!$this->components->contains($component)) {
            $this->components[] = $component;
            $component->setPackaging($this);
        }

        return $this;
    }

    public function removeComponent(Component $component): self
    {
        if ($this->components->removeElement($component)) {
            // set the owning side to null (unless already changed)
            if ($component->getPackaging() === $this) {
                $component->setPackaging(null);
            }
        }

        return $this;
    }
}
