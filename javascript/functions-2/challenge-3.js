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
  playInterval: null,
  play: function () {
    this.playInterval = setInterval(() => {
      if (this.currentPhotoIndex + 1 <= this.photoList.length) {
        console.log(this.photoList[this.currentPhotoIndex]);
        this.currentPhotoIndex = this.currentPhotoIndex + 1;
      } else {
        console.log("End of slideshow!");
        this.pause();
      }
    }, 2000);
  },
  pause: function () {
    clearInterval(this.playInterval);
  },
};

slideShow.play();
// slideShow.pause();
// Create an empty property named playInterval

// A play() function that moves to the next photo ever 2000ms until the end.

// Tip - use playInterval = setInterval(fn,ms).

// A pause() function that stops the slideshow

//  Tip - use clearInterval(playInterval)

// Automatically pause the slideshow if it gets to the end of the photolist while playing.
