/*
 * YuGene-d3.js
 * A re-implementation of StemInformatics YuGene (http://www.stemformatics.org/genes/summary?gene=ENSG00000111640&db_id=56#)
 */


(function(){

var body = d3.select('body')
  , data_path = "yugene_gapdh_human.tsv"
  , ext = data_path.split('.')[data_path.split('.').length - 1]
  , data_method = ext === 'tsv' ? d3.tsv :
                  ext === 'csv' ? d3.csv :
                  null

if (!data_method){
    alert("Unsupported file format! Please use a .tsv or .csv file.")
    return
}


body.append('svg')
    .attr('id', 'svg-graph')



var data = data_method(datapath){
    

}

})()
