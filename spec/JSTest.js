
describe('operations giving marks', function() {

    const DARK_GRAY = "rgb(37, 45, 55)";
    const LIGHT_GRAY = "rgb(124, 135, 152)";

    var listty = document.querySelectorAll("ol li");
    var button = document.querySelector(".rating button");
    var buttonBack = document.querySelector(".back");
    var mark;
    var elem;

    function rate(ii) {
        
        mark = listty[ii];
        mark.click();
        button.click();        

    }

    it('m exists', function() {

        expect(m).not.toEqual(null);

    });

    it('how much marks', function() { // izbac?x
        
        expect(m.getMarksNumber()).toBe(5);
   
    });

    it('five circles', function() { // izbac?x
        
        expect(listty.length).toBe(5);
   
    });

    it('number in circle', function() {

        expect(listty[0].innerHTML).toBe("1");

    });

    it('testing mode has back button', function() {
        
        testMode(true);
        expect(window.getComputedStyle(document.querySelector(".back")).getPropertyValue("display")).toBe("flex");

    })

    it('thanks: display - none', function() {

        expect(window.getComputedStyle(document.querySelector("#thanks")).getPropertyValue("display")).toBe("none");

    });

    it('rating in the middle', function() {

        expect(window.getComputedStyle(document.querySelector(".cards")).getPropertyValue("justify-content")).toBe("center");

    });

    it('clicked is gray', function() {
        
        elem = listty[0];
        elem.click();
        expect(window.getComputedStyle(elem).getPropertyValue("background-color")).toBe(LIGHT_GRAY);
        elem.click();

    });

    it('second clicked, first old color', function() {
        
        var elemA = listty[3];
        var elemB = listty[4];
        elemA.click();
        elemB.click();
        expect(window.getComputedStyle(elemA).getPropertyValue("background-color")).toBe(DARK_GRAY);
        elemB.click();

    });

    it('second time clicked is off', function() {
        
        elem = listty[1];
        elem.click();
        elem.click();
        expect(window.getComputedStyle(elem).getPropertyValue("background-color")).toBe(DARK_GRAY);

    });

    it('submit mark', function() {
        
        testMode(true);
        rate(0);
        expect(document.querySelector(".resolved-mark").innerHTML).toBe("1");
        buttonBack.click();

    });

    it('submit changes card', function() {
            
        testMode(true);
        rate(3);
        expect(window.getComputedStyle(document.querySelector("#thanks")).getPropertyValue("display")).toBe("flex");
        buttonBack.click();

    });

    it('when thanks is on in testing mode, there is a button', function() {
        
        testMode(true);
        rate(3);        
        expect(window.getComputedStyle(document.querySelector(".back")).getPropertyValue("display")).toBe("flex");
        buttonBack.click();

    });

    it('after thanks in testing mode, we go back, no marks', function() {
        
        let i = 1;
        testMode(true);
        rate(i);
        buttonBack.click();
        expect(window.getComputedStyle(listty[i]).getPropertyValue("background-color")).toBe(DARK_GRAY);

    });

    it('after submit, first card disappears', function() {
        
        testMode(true);
        rate(3);
        expect(window.getComputedStyle(document.querySelector(".rating")).getPropertyValue("display")).toBe("none");
        buttonBack.click();

    });

    it('after back button, there is first card', function() {
        
        testMode(true);
        rate(2);
        buttonBack.click();
        expect(window.getComputedStyle(document.querySelector(".rating")).getPropertyValue("display")).toBe("block");

    });

    it('just click on submit, no marks, does nothing', function() {

        button.click();
        expect(window.getComputedStyle(document.querySelector("#thanks")).getPropertyValue("display")).toBe("none");

    });

    
    it('we are not in testing mode', function() {

        testMode(false);
        rate(4);
        expect(window.getComputedStyle(buttonBack).getPropertyValue("display")).toBe("none");
        buttonBack.click();

    });  

    it('in testing mode, Go To Marks neutral on the first page', function() {

        elem = listty[0];
        testMode(true);
        elem.click();
        buttonBack.click();
        expect(window.getComputedStyle(elem).getPropertyValue("background-color")).toBe(LIGHT_GRAY);
        elem.click();

    });

});