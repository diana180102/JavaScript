function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const PO = [];
    
    
    
    
     arr.map(e => {
        const semiMayor = Math.pow(earthRadius + e.avgAlt, 3);
        const peridoOrbital = Math.round((2 * Math.PI)*(Math.sqrt(semiMayor/GM)));
        

        return PO.push({name: e.name, orbitalPeriod: peridoOrbital})
        
           
    });

    console.log(PO);
      
    return PO;
  }
  
  orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);