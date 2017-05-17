'use strict';

App.controller('AdminController', function($scope, AdminService) {
          var self = this;
          self.admin={id:null, name:null, email:null, balance:null, username:null, password:null, roles:[] };
          self.admins=[];
              
          self.fetchAllAdmins = function(){
              AdminService.fetchAllAdmins()
                  .then(
      					       function(d) {
      						        self.admins = d;
      						        console.log(d)
      					       },
            					function(errResponse){
            						console.error('Error while fetching admins');
            					}
      			       );
          };
           
          self.createAdmin = function(admin){
              AdminService.createAdmin(admin)
		              .then(
                          self.fetchAllAdmins, 
                          function(errResponse){
					               console.error('Error while creating admin.');
				              }	
                  );
          };
          
          self.fetchAllAdmins();

         self.updateAdmin = function(admin){
              AdminService.updateAdmin(admin)
		              .then(
				              self.fetchAllAdmins, 
				              function(errResponse){
					               console.error('Error while updating admin.');
				              }	
                  );
          };
          
          self.fetchAllAdmins();

         self.deleteAdmin = function(id){
              AdminService.deleteAdmin(id)
		              .then(
				              self.fetchAllAdmins, 
				              function(errResponse){
					               console.error('Error while deleting admin.');
				              }	
                  );
          };

          self.fetchAllAdmins();

          self.submit = function() {
              if(self.admin.id==null){
                  console.log('Saving New Admin', self.admin);    
                  self.createAdmin(self.admin);
              }else{
                  self.updateAdmin(self.admin);
                  console.log('User updated with id ', self.admin.id);
              }
              self.reset();
          };
              
          self.edit = function(id){
              console.log('id to be edited', id);
              for(var i = 0; i < self.admins.length; i++){
                  if(self.admins[i].id == id) {
                     self.admin = angular.copy(self.admins[i]);
                     break;
                  }
              }
          };
              
          self.remove = function(id){
              console.log('id to be deleted', id);
              if(self.admin.id === id) {//clean form if the user to be deleted is shown there.
                 self.reset();
              }
              self.deleteAdmin(id);
          };

          
          self.reset = function(){
              self.admin={id:null, name:null, email:null, balance:null, username:null, password:null, roles:[] };
              $scope.myForm.$setPristine(); //reset Form
          };

      });