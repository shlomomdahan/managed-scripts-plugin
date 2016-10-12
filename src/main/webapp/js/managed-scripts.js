
function ms_descArguments(referenceTag, desc){
   var all = new Array();
   all = document.getElementsByName('buildStepId');
   for(var i = 0; i < all.length; i++) {
	   if(referenceTag == all.item(i)){
		   var descriptionTag = document.getElementsByName('argumentDescription').item(i);
		   descriptionTag.innerHTML = desc;
	   }
    }
}

function ms_showParams(referenceTag, scriptId){
    desc.getArgsDescription(scriptId, function(t) {
      ms_descArguments(referenceTag, t.responseObject());
    });
    ms_getArgs(referenceTag,scriptId);
}

function ms_getArgs(referenceTag, scriptId){
    desc.getArgs(scriptId,function(t){
        referenceTag.args = JSON.parse(t.responseText);
        ms_labelArgs(referenceTag);
    });
}

function ms_labelArgs(referenceTag)
{
    var all = new Array();
    all = document.getElementsByName('buildStepId');
    for(var i = 0; i < all.length; i++)
    {
        if(!referenceTag || referenceTag === all.item(i))
        {
            var args = all.item(i).args;
            var parent = document.getElementsByName('scriptBuildStepArgs').item(i);
            var argNameDivs = parent.querySelectorAll('[name=argName]');
            for (var j=0; j < argNameDivs.length; j++)
            {
                argNameDivs[j].innerHTML = args[j].name;
            }
        }
    }
}

