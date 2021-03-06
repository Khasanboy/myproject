package com.coffemachine.services;

import java.util.List;

import com.coffemachine.model.Purchase;
import com.coffemachine.model.User;

public interface PurchaseService {
	
	public List<Purchase> getAllPurchases();
	
	public Purchase getPurchase(Long id);
	
	public void addPurchase(Purchase purchase);
	
	public void deletePurchase(Long id);
	
	public void updatePurchase(Purchase purchase);

	public void deletePurchase(Purchase purchase);
	
	public List<Purchase> getByUser(User user);
}
