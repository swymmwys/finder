export const getData = (gender: string) =>
  fetch(`https://randomuser.me/api?gender=${gender}`)
    .then(response => response.json())
    .then(response => {
      return new Promise<{[key: string]: any}>(function(resolve, reject) {
        setTimeout(() => {
          const xFactor = Math.round(Math.random() * 100);
          if (xFactor % 2 === 0) {
            resolve(response.results[0]);
          } else {
            reject();
          }
        }, 2000);
      });
    });
