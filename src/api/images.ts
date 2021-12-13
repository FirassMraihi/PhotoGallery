import data from '../utils/mock';

function fetchImages() {
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(data);
    }, 5000);
  });
  return promise;
}

export {fetchImages};
