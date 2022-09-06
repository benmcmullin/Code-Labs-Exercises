function range( start, end, increment ) {

    var result = [];
    
    if ( increment == undefined )
      increment = 1;
    
    numLoops = Math.abs( (end - start)/ increment ) + 1 ;
    

    for ( var i = 0; i < numLoops; i ++ ) {
    
      result.push( start );
       
      start += increment;
    }
    
    return result;
  }
  
  console.log(range(1, 10));
  // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  console.log(range(5, 2, -1));
  // → [5, 4, 3, 2]