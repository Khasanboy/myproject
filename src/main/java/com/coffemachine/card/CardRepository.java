package com.coffemachine.card;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

public interface CardRepository extends CrudRepository<Card, Long>{
	
	public List<Card>findByUser(Long id);

}
