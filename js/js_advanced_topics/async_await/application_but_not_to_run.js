        var isLoggedIn = false;

        function promiseHandler(is_looged_in){
            isLoggedIn = is_looged_in
        };

        function afterPromise()
        {
            if (isLoggedIn)
            {
                next()
            }
            else
            {
                next("/login?redirectedFrom="+router.currentRoute.name)
            }
        }

        async function myPromise(){
            var promise = new Promise( (resolve, reject) => {
                axios.post('/api/auth/me?token='+localStorage.getItem('token'))
                .then(function (response) {
                    resolve(
                        promiseHandler(true)
                    );
                })
                .catch(function (error) {
                    resolve(
                        promiseHandler(false)
                    );
                })
            })
            await promise;
            afterPromise()
        }

        myPromise()