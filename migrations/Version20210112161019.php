<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210112161019 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE component (id INT AUTO_INCREMENT NOT NULL, packaging_id INT NOT NULL, name VARCHAR(255) NOT NULL, INDEX IDX_49FEA1574E7B3801 (packaging_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE material (id INT AUTO_INCREMENT NOT NULL, component_id INT NOT NULL, name VARCHAR(255) NOT NULL, matter VARCHAR(255) NOT NULL, mass DOUBLE PRECISION NOT NULL, volume DOUBLE PRECISION NOT NULL, INDEX IDX_7CBE7595E2ABAFFF (component_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE packaging (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE component ADD CONSTRAINT FK_49FEA1574E7B3801 FOREIGN KEY (packaging_id) REFERENCES packaging (id)');
        $this->addSql('ALTER TABLE material ADD CONSTRAINT FK_7CBE7595E2ABAFFF FOREIGN KEY (component_id) REFERENCES component (id)');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE material DROP FOREIGN KEY FK_7CBE7595E2ABAFFF');
        $this->addSql('ALTER TABLE component DROP FOREIGN KEY FK_49FEA1574E7B3801');
        $this->addSql('DROP TABLE component');
        $this->addSql('DROP TABLE material');
        $this->addSql('DROP TABLE packaging');
    }
}
