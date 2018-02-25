log("initial commit")
const apiKey = 'AIzaSyD01fScsJIns8KIcLtWf7XQggVHt3sMX-g';
const url = 'https://www.googleapis.com/urlshortener/v1/url';
const projection = 'FULL';

// // GET REQUEST EXAMPLE
// function expandUrl(input) {
//     const urlToExpand = url + '?key=' + apiKey +
//         '&shortUrl=' + input;
//     const xhr = new XMLHttpRequest;
//     xhr.responseType = 'json';
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === XMLHttpRequest.DONE) {
//             console.log(xhr.response);
//         }
//     };
//     xhr.open('GET', urlToExpand);
//     xhr.send();
// }
// expandUrl('https://goo.gl/cjyLB1');

// // POST REQUEST EXAMPLE
// function shortenUrl(input) {
// 	const urlWithKey = url + '?key=' +apiKey;
//   const urlToShorten = input;
//   const data = JSON.stringify({longUrl: urlToShorten});
//   const xhr = new XMLHttpRequest;
//   xhr.responseType = 'json';
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       console.log(xhr.response.id);
//     }
//   };
//   xhr.open('POST', urlWithKey);
//   xhr.setRequestHeader('Content-Type', 'application/json');
//   xhr.send(data);
// }

// shortenUrl('https://medium.com/@codecademy/breaking-the-coding-language-barrier-bf24652c3c60');

// // AJAX GET EXAMPLE
// function expandUrl(input) {
// 	const urlToExpand = url + '?key=' + apiKey +
// '&shortUrl=' + input;
//   $.ajax({
//     url: urlToExpand,
//     type: 'GET',
//     dataType: 'json',
//     success(response) {
//       console.log(response.longUrl);
//     },
//     error(jqXHR, status, errorThrown) {
//       console.log(jqXHR);
//     }
//   });
// }

// expandUrl('https://goo.gl/cjyLB1');

// // AJAX POST EXAMPLE
// function shortenUrl(input) {
//   const urlWithKey = url + '?key=' + apiKey;
//   const urlToShorten = input;
//   $.ajax({
//     url: urlWithKey,
//     type: 'POST',
//     data: JSON.stringify({ longUrl: urlToShorten }),
//     dataType: 'json',
//     contentType: 'application/json',
//     success(response) {
//       console.log(response.id);
//     },
//     error(jqXHR, status, errorThrown) {
//       console.log(jqXHR);
//     }
//   });
// }
// shortenUrl('https://developer.mozilla.org/fr/docs/Web/API/Window/prompt');

// AJAX $.GET EXAMPLE
function expandUrl(input) {
  const urlToExpand = url + '?key=' + apiKey +
    '&shortUrl=' + input;
  $.get(urlToExpand,
    response => {
      console.log(response.longUrl);
    }, 'json'
  );

}
expandUrl('https://goo.gl/JjAsZ5'); 

// AJAX $.POST EXAMPLE
function shortenUrl(input) {
  const urlWithKey = url + '?key=' + apiKey;
  const urlToShorten = input;
  $.post({
      url: urlWithKey,
      data: JSON.stringify({ longUrl: urlToShorten }),
      dataType: 'json',
      contentType: 'application/json',
      success(response) {
          console.log(response.id);
      },
      error(jqXHR, status, errorThrown) {
          console.log(jqXHR);
      }
  });
}

shortenUrl('https://www.linguee.fr/anglais-francais/traduction/boilerplate.html');