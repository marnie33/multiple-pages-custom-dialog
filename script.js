//creates new instance of custom dialog when initiated
function CustomAlert(){
    
    //dialog passes in from Alert.render(here)
    this.render = function(dialog){
        
        //gets window size
        var winW = window.innerWidth;
        var winH = window.innerHeight;
        
        //gets box holder div from page
        var boxholder = document.getElementById('boxholder');
        
        //creates dialog box in box holder, adds css
        $('#boxholder').append('<div id="dialogbox"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div><div>');
       $('#boxholder').addClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        
        //gets box overlay holder from page
        var boxoverlay = document.getElementById('boxoverlay');
        
        //creates dialog overlay and adds css
        $('#boxoverlay').append('<div id="dialogoverl"></div>');
        $('#boxoverlay').addClass('dialogoverlay');
        
        //formats overlay
        boxoverlay.style.display = "block";
        boxoverlay.style.height = winH + "px";
        
        //formats dialog box on screen
        boxholder.style.left = (winW/2) - (550 * .5) + "px";
        boxholder.style.top = "250px";
        boxholder.style.display = "block";
        
        //creates dialog box content, calls custom content from Alert.render()
        $('#dialogboxhead').text("Custom Dialog Box");
        $('#dialogboxbody').append(dialog);
        $('#dialogboxfoot').append('<button id="okbtn" onclick="Alert.ok()">OK</button>');
        
    }//end render function
    
    //what happens when OK is clicked in dialog box
    this.ok = function(){
        
        //removes css classes, does not fully remove css though
        $('#boxholder').removeClass('dialogbox dialogbox div dialogbox div #dialogboxhead dialogbox div #dialogboxbody dialogbox div #dialogboxfoot');
        $('#boxoverlay').removeClass('dialogoverlay');
        
        //removes css that 'sticks' 
        $('#boxholder').css('top','').css('left','').css('display','none');
        $('#boxoverlay').css('display','none').css('height','');
        
        //empties boxholder and boxoverlay divs
        $('#boxholder').empty();
        $('#boxoverlay').empty();
        
    }//end okay function
    
}//end custom alert

//initiates dialog
var Alert = new CustomAlert();
