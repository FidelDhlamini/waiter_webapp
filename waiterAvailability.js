module.exports = function WaiterAvailability() {

   
    


    let waiter = new Object();

    let waiters = [];
    let nameAdded = waiter.name;
    let daysAvail = waiter.daysAvail;
    let numberOfwaiters = 0;
    

    function saveSchedule(name, schedule){
        
        nameAdded = name;
        daysAvail = schedule.toString().split(" ");
        waiters.push(waiter);
        

    }
    function numberOfWaitersOnthisDay(day){
        for(i = 0;i < waiters.length;i++){
            if(waiter.getDaysAvailable === day){
                ++numberOfwaiters;
            }
        }
        return  numberOfwaiters;

      
      
    
        
    }
    function getData(){
        return {
            nameAdded,
            daysAvail
           
        }
    }

    function getName(){
        return waiter.name;  
    }
    function getDaysAvailable(){
        return waiter.daysAvail;
    }

    function getDaysWaiterIsAvailable(name){
        if(waiter.name == name){
            return waiter.daysAvail;
        }
        
    }


    function getSchedule(){
        
        return getName() +" your work schedule for this week is " + getDaysAvailable;
        
    }
     
    return{
         getSchedule,
        saveSchedule,
        getName,
        getDaysAvailable,
        getDaysWaiterIsAvailable,
        getData,
         numberOfWaitersOnthisDay

    }



    
}