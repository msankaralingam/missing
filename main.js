var a=[9,15,4]
			function missing(a){
			a=a.sort((a,b)=> a-b);
			var x=[];
			for(i=0; i<a[a.length-1]; i++){
			for(j=1; j<a[i+1]; j++){
				if(a[i]+j!=a[i+1] && a[i]+j<a[i+1]){
					x.push(a[i]+j);
				}
				}	
			}
			if(typeof x[0]=="undefined"){
				x=0;
			}
			return x;
			}
			console.log(missing(a));
			