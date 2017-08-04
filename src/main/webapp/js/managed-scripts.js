
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

