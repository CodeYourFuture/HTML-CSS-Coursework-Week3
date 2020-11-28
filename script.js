/*
 *
 *Function for wedding cake image slider
 *
*/
var weddingCakeImages = [
  "images/engagement-cake.jpg",
  "images/wedding-cake.jpg"
];

var numWeddingCake=0;

function nextWeddingCake()
{
  var slider = document.getElementById('weddingCakeImage');
  numWeddingCake++;
  if(numWeddingCake >= weddingCakeImages.length)
    {
      numWeddingCake=0;
    }
  slider.src = weddingCakeImages[numWeddingCake];
}

function previousWeddingCake()
{
  var slider = document.getElementById('weddingCakeImage');
  numWeddingCake--;
  if(numWeddingCake < 0)
    {
      numWeddingCake = weddingCakeImages.length-1;
    }
  slider.src = weddingCakeImages[numWeddingCake];
}


/*
 *
 *Function for birthday cake image slider
 *
*/
var BirthdayCakeImages = [
  "images/birthday-cake.jpg",
  "images/birthday-cake-2.jpg",
  "images/birthday-cake-3.jpg"
];

var numBirthdayCake=0;

function nextBirthdayCake()
{
  var slider = document.getElementById('birthdayCakeImage');
  numBirthdayCake++;
  if(numBirthdayCake >= BirthdayCakeImages.length)
    {
      numBirthdayCake=0;
    }
  slider.src = BirthdayCakeImages[numBirthdayCake];
}

function previousBirthdayCake()
{
  var slider = document.getElementById('birthdayCakeImage');
  numBirthdayCake--;
  if(numBirthdayCake < 0)
    {
      numBirthdayCake = BirthdayCakeImages.length-1;
    }
  slider.src = BirthdayCakeImages[numBirthdayCake];
}


/*
 *
 *Function for assortment image slider
 *
*/
var assortmentImages = [
  "images/assortments.jpg",
  "images/assortments-2.jpg"
];

var numAssortment=0;

function nextAssortment()
{
  var slider = document.getElementById('assortmentsImage');
  numAssortment++;
  if(numAssortment >= assortmentImages.length)
    {
      numAssortment=0;
    }
  slider.src = assortmentImages[numAssortment];
}

function previousAssortment()
{
  var slider = document.getElementById('assortmentsImage');
  numAssortment--;
  if(numAssortment < 0)
    {
      numAssortment = assortmentImages.length-1;
    }
  slider.src = assortmentImages[numAssortment];
}
