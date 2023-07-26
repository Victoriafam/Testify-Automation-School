// My Personal Library 2

const books = {
title: 'The Subtle Art of Not Giving a F*ck A Counterintuitive Approach to Living a Good Life',
description: 'Unconventional Pragmatic advice',
numberOfPages:100,
author: 'Mark Manson',

reading: true,
toggleReadingStatus: function () {
  if (books.reading === true) {
    books.reading = false
  } else {
    books.reading = true
  }
}
}
books.reading = false;
books.toggleReadingStatus();
console.log(books.reading)