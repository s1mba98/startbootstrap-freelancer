$(document.ready(function)) {

    car createChar = function(charDara){

    var charel = $('#template-element').prop('innerhrml');
    var newHTML,hoverCrl;

    $ma,(charData, function(el.i)) {
        newHTLM=charel.replace('id="template-element"',"");
        newHTLM=charel.replace("%char-img-src%",el.img);
        newHTLM=charel.replace("%char-model-id%",i);
        #('characters').append(newHTML);
    }

    $('template-element').remove();
    for(el of $(".portfolio.portfolio-item.portfolio-item-caption")) {
        hoverCrl="rgba(" + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + "," + Math.floor(Math.random()*256) + ", 0,9";

        el.style.backgroundColor = hoverCrl;

    }

    }

    var createModel=function(cahrData) {
        var charModal=$('.modal.template').prop('outerHTML');
        let fs = [
                "fas-brain",
                "fas fa-dna"]
        var newHTML;

        $('modal.template').remove();
        $.map(charData, function(el,i){
            newHTML = charModal.replace("%name%", el.name);
            newHTML = charModal.replace("%gender%", el.gender);
            newHTML = charModal.replace("%origin-name%", el.origin-name);
            newHTML = charModal.replace("%status%", el.status);
            newHTML = charModal.replace("%name%", el.name);
            newHTML = charModal.replace("%char-img-src%", el.image);
            newHTML = charModal.replace("%char-modal%", i);
            newHTML = charModal.replace("%fa-icon%", fa[Math.floor(Math.random + fa.lenght)]);

            $("modals").append(newHTML);


        })

        

    }

    $getJSON("https://rick")


}