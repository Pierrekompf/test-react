# Emballages, composants et matériaux

Cette application sert à la gestion de stock d'emballages. Un emballage est caractérisé par un nom, il possède aussi plusieurs composants. Un composant porte un nom et est constitué de matériaux qui ont chacun un nom, une matière, une masse et un volume

#But de l'exercice 
Le but de l'exercice est de :
- Créer une page qui affiche la liste de tous les emballages présents dans la base, avec possibilité de modifier un emballage
-À partir de la première page, créer un formulaire qui affiche et permet de modifier, àl'écran et en base, un emballage avec ses composants et leurs matériaux.

# Diagramme de classe
```plantuml
,---------.
|Packaging|
|---------|
|-id      |
|-name    |
`---------'
     | 1
     |    
     | *     
,---------.
|Component|
|---------|
|-id      |
|-name    |
`---------'
     | 1
     |    
     | *   
,--------. 
|Material| 
|--------| 
|-id     | 
|-name   | 
|-matter | 
|-mass   | 
|-volume | 
`--------' 
```

## Pour développer
### Installer Composer et Symphony CLI
* Installer PHP (avec [WampServer](http://www.wampserver.com/) par exemple)
* Installer [Composer](https://getcomposer.org/download/)
* Installer [Symphony](https://symfony.com/download)

Avec Linux ou Windows Subsystem for Linux (WSL)
```bash
$ wget https://get.symfony.com/cli/installer -O - | bash
```