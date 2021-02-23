async function myDisplay() {
    let myPromise = new Promise(function(myResolve, myReject) {
      setTimeout(function() {
           myResolve( test());
      }, 3000);
    });

    console.log(await myPromise)
    console.log(test2())
  }
  
  function test()
  {
       return "i am testing";
  }

  function test2()
  {
       return "i am testing 2";
  }
  
  myDisplay();