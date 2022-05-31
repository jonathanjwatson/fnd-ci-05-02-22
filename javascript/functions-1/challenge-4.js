// Create a single object named "slideshow"
// that represents the data and functionality of a picture slideshow.
//  There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:
const slideShow = {
  photoList: [
    "https://www.fillmurray.com/200/300",
    "http://www.placecage.com/c/200/300",
    "https://placekitten.com/200/300",
  ],
  currentPhotoIndex: 0,
  nextPhoto: function () {
    if (this.currentPhotoIndex + 1 < this.photoList.length) {
      this.currentPhotoIndex = this.currentPhotoIndex + 1;
    } else {
      console.log("End of slideshow!");
      this.currentPhotoIndex = 0;
    }
  },
  prevPhoto: function () {
    if (this.currentPhotoIndex - 1 > 0) {
      this.currentPhotoIndex = this.currentPhotoIndex - 1;
    } else {
      this.currentPhotoIndex = this.photoList.length - 1;
    }
  },
  getCurrentPhoto: function () {
    return this.photoList[this.currentPhotoIndex];
  },
};

console.log(slideShow.getCurrentPhoto());
slideShow.nextPhoto();

console.log(slideShow.getCurrentPhoto());
slideShow.nextPhoto();

console.log(slideShow.getCurrentPhoto());
slideShow.nextPhoto();

console.log(slideShow.getCurrentPhoto());
slideShow.prevPhoto();

// An array called photoList that contains the names of the photos as strings

// An integer currentPhotoIndex that represents which photo in the photoList is currently displayed

// A nextPhoto() function that moves currentPhotoIndex to the next index if there is one, and:

// logs the current photo name.

// Otherwise, log "End of slideshow";

// A prevPhoto() function that does the same thing, but backwards.

// A function getCurrentPhoto() that returns the current photo from the list.
