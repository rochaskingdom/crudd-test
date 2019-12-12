package br.com.vinicius.crudgestores.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import br.com.vinicius.crudgestores.model.Gestor;

@Repository
public interface GestorRepository extends JpaRepository<Gestor, Long> {

}
