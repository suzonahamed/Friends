var photos=["received1.jpeg","received2.jpeg","received3.jpeg","received4.jpeg","received5.jpeg","received6.jpeg"];
var imgTag=document.querySelector("img");
var count=0;
function nex()
{
  count++;
  if(count>=photos.length)
  {
    count=0;
    imgTag.src=photos[count];
  }
  else
  {
    imgTag.src=photos[count];
  }
 
}

function pre()
{
    count--
    if(count<0)
    {
        count=photos.length-1;
        imgTag.src=photos[count];
    }
    else
    {
        imgTag.src=photos[count];
    }

}
