      /*document.getElementById('test').addEventListener('click', function(e){
            e.preventDefault();
            console.log(e);
        })

        document.getElementById('name').addEventListener('input', function(e){
            console.log(e);
        })*/

        var arr = new Array(1, 3, 4, 4, 7, 9, 7, 6,);

        document.getElementById('test').addEventListener('click', function(e){
            e.preventDefault();
            // var x = arr.filter(item => item % 2 != 1 );
            // var y = arr.map(item => item+3);
            // arr.forEach(element => {
            //     console.log(element);    
            // });
            // console.log(x);
            // console.log(y);

            var table = document.getElementById('table');
            var i;

            for(i=0; i<5; i++){
                var tr = document.createElement('tr');
                    arr.forEach(element => {
                        var td = document.createElement('td');
                        var text = document.createTextNode(element);
                        td.appendChild(text);
                        tr.appendChild(td);
                    })
                table.appendChild(tr);
            }
        })