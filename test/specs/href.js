// describe('Href 400 or 500 check', ()=> {
//     it('All links should point to an exsiting page', ( done )=> {
//         browser
//           .url('https://www.arcpublishing.com/')
//           .elements('a')
//           .then(function(links) {
//             for (var i=0; i<links.value.length; i++) {
//               var link = links.value[i].ELEMENT;
//
//               client.elementIdAttribute(link,'href')
//                 .then( function(result) {
//                   console.log(result.value);
//                   fetch(result.value)
//                     .then( function(res){
//                       console.log(res);
//                     })
//                     .catch( function(err){
//                       console.log(err || 'error')
//                     })
//                 })
//             }
//           })
//         done();
//     });
// });
