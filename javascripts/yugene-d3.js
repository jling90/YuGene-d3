/*
 * YuGene-d3.js
 * A re-implementation of StemInformatics YuGene (http://www.stemformatics.org/genes/summary?gene=ENSG00000111640&db_id=56#)
 */


(function(){

var body = d3.select('body')
  , data_path = "yugene_gapdh_mouse.csv"
  , ext = data_path.split('.')[data_path.split('.').length - 1]
  , data_method = ext === 'tsv' ? d3.tsv :
                  ext === 'csv' ? d3.csv :
                  null


if (!data_method){
    console.log("Unsupported file format! Please use a .tsv or .csv file.")
    return
}


var chart = dc.barChart(".container")
//var granularity = 


data_method(data_path, function(data){
    var filter = crossfilter(data)
      , u_val = filter.dimension(function(d){return d.yugene_value})

    chart.width(1200)
	 .height(650)
         .x(d3.scale.linear().domain([0, data.length]))
         .brushOn(false)
	 .dimension(u_val)
         .group(u_val.group())

    chart.render()
})
    


})()
