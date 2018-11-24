<?php
$feeds = [
  'http://www.retroplayers.com.br/?feed=rss2',
  'https://br.ign.com/feed.xml',
  'http://rss.jogos.uol.com.br/ultnot/index.xml',
  'http://feeds.feedburner.com/jogoveiobr',
  'http://gizmodo.uol.com.br/games/feed/',
  'http://feeds.feedburner.com/ArkadeGames',
  'http://www.gamesfoda.net/feed/',
  'http://feeds.feedburner.com/MeuPs4',
  'http://blogdoxbox.com/feed/',
  'http://blogdoxbox.com/feed/',
  'http://www.nintendoblast.com.br/feeds/posts/default'
];

//echo "teste";

print_r($feeds);


$curl = curl_init();
curl_setopt_array($curl, Array(
	CURLOPT_URL            => 'http://www.retroplayers.com.br/?feed=rss2',
	CURLOPT_USERAGENT      => 'spider',
	CURLOPT_TIMEOUT        => 120,
	CURLOPT_CONNECTTIMEOUT => 30,
	CURLOPT_RETURNTRANSFER => TRUE,
	CURLOPT_ENCODING       => 'UTF-8'
));
$data = curl_exec($curl);
curl_close($curl);

print_r($data, TRUE);

//$xml = simplexml_load_string($data, 'SimpleXMLElement', LIBXML_NOCDATA);

die('<pre>' . print_r($xml, TRUE) . '</pre>');

//print_r($xml, TRUE);
?>
