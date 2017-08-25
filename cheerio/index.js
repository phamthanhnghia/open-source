const express = require('express')
const app = express()
var cheerio = require('cheerio');
var request = require('request');

const http = require('http');

var urls = [];

app.get('/scraper',function(req,res){

  request('https://www.facebook.com/nghia.phamthanh.169', function (error, response, body) {
    var $ = cheerio.load(body);
    var id = $(this).attr('ACCOUNT_ID');
    // $('a.title').each(function(i, elem){
    //   //var a = $(this).attr('class', 'title may-blank outbound').html();
    //   var url = $(this).attr('href');
    //   urls.push(url);
    // });
    console.log(id);
  });

  // request('https://www.reddit.com', function (error, response, body) {
  //   var $ = cheerio.load(body);
  //   $('a.title').each(function(i, elem){
  //     //var a = $(this).attr('class', 'title may-blank outbound').html();
  //     var url = $(this).attr('href');
  //     urls.push(url);
  //   });
  //   console.log(urls);
  // });
})
app.listen(3000)
