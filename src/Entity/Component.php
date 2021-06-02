<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use App\Repository\ComponentRepository;
use Doctrine\Common\Collections\Collection;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass=ComponentRepository::class)
 * @ApiResource(
 *  normalizationContext={"groups"={"component_read"}},
 *  denormalizationContext={"groups"={"component_update"}}
 * )
 */
class Component
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     * @Groups({"component_read", "material_read", "packaging_read"})
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups({"component_read", "material_read", "packaging_read", "packaging_update", "component_update"})
     */
    private $name;

    /**
     * @ORM\OneToMany(targetEntity=Material::class, mappedBy="component")
     * @Groups({"component_read", "packaging_read", "packaging_update", "component_update"})
     */
    private $materials;

    /**
     * @ORM\ManyToOne(targetEntity=Packaging::class, inversedBy="components")
     * @ORM\JoinColumn(nullable=false)
     * @Groups({"material_read", "component_read"})
     */
    private $packaging;

    public function __construct()
    {
        $this->materials = new ArrayCollection();
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
     * @return Collection|Material[]
     */
    public function getMaterials(): Collection
    {
        return $this->materials;
    }

    public function addMaterial(Material $material): self
    {
        if (!$this->materials->contains($material)) {
            $this->materials[] = $material;
            $material->setComponent($this);
        }

        return $this;
    }

    public function removeMaterial(Material $material): self
    {
        if ($this->materials->removeElement($material)) {
            // set the owning side to null (unless already changed)
            if ($material->getComponent() === $this) {
                $material->setComponent(null);
            }
        }

        return $this;
    }

    public function getPackaging(): ?Packaging
    {
        return $this->packaging;
    }

    public function setPackaging(?Packaging $packaging): self
    {
        $this->packaging = $packaging;

        return $this;
    }
}
