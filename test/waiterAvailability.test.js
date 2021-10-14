let assert = require("assert");
const internal = require("stream");
let ShiftCheck = require("../waiterAvailability");
const shifts = ShiftCheck();

describe('The shiftCheck function',function(){

    it('should save waiter Schedule for the week ',function(){

        shifts.saveSchedule("Fidel","Monday Tuesday");
        


        assert.equal('Fidel your work schedule for this week is Monday,Tuesday',shifts.getSchedule());
    });

    it('should return days where selected waiter is available ',function(){

        shifts.saveSchedule("Fidel","Monday Tuesday");

        
        


        assert.equal('Monday,Tuesday',shifts.getDaysWaiterIsAvailable("Fidel"));
    });
    it('should return days where selected waiter is available ',function(){

        shifts.saveSchedule("Fidel","Monday Tuesday");
        shifts.saveSchedule("Liam","Monday Tuesday");
        shifts.saveSchedule("Vukosi","Monday Tuesday");


        
        
        


        assert.equal(0,shifts.numberOfWaitersOnthisDay("Monday"));
    });
    
});
