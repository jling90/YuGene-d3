/*
 * YuGene-d3.js
 * A re-implementation of StemInformatics YuGene (http://www.stemformatics.org/genes/summary?gene=ENSG00000111640&db_id=56#)
 */


(function(){

var body = d3.select('body')
  , data_path = "yugene_gapdh_mouse.tsv"
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
    // Build a CrossFilter from our data
    var cf = crossfilter(data)

    // Define out data dimensions
    var ugene_dim = cf.dimension(function(d){return +d.yugene_value})
      , data_dim = cf.dimension(function(d){return +d.dataset_id})
      , author_dim = cf.dimension(function(d){return d.dataset_name.split("_")[0]})
      , year_dim = cf.dimension(function(d){return +d.dataset_name.split("_")[1]})

    // Define data groups
    var all = cf.groupAll()
      , data_by_u_val = ugene_dim.group()
      , data_by_id = data_dim.group()
      , data_by_author = author_dim.group()
      , data_by_year = year_dim.group()

    chart.width(1200)
	 .height(650)
         .x(d3.scale.linear().domain([0, 1]))
         //.brushOn(false)
	 .dimension(data_dim)
         .group(data_by_u_val)

    chart.render()
})
    


})()
