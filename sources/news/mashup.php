<?php 

class WowMultiRss {


	$url = "https://br.ign.com/feed.xml";
	$url2 = "https://br.ign.com/feed.xml";
	$url3 = "https://br.ign.com/feed.xml";

	//Above feeds Combined in array for combined multiple feed option
	$urls = array($url,$url2,$url3);


	function getFeeds(){
			// cURL multi-handle
			$mh = curl_multi_init();

			// This will hold cURLS requests for each file
			$requests = array();

			$options = array(
				CURLOPT_RETURNTRANSFER => true
			);

			foreach ($this->urls as $key => $url)
			{
			// Add initialized cURL object to array
				$requests[$key] = curl_init($url);

			curl_setopt($requests[$key], CURLOPT_RETURNTRANSFER, true);

			// Add cURL object to multi-handle
			curl_multi_add_handle($mh, $requests[$key]);
			}

			// Do while all request have been completed
			do {
			   curl_multi_exec($mh, $active);
			} while ($active > 0);

			// Collect all data here and clean up
			foreach ($requests as $key => $request) {

				$returned[$key] = curl_multi_getcontent($request);
				curl_multi_remove_handle($mh, $request);
				curl_close($request);//THIS MUST GO AFTER curl_multi_getcontent();
			}

			curl_multi_close($mh);

			foreach($returned as $key =>$value){
				$array[$key] = simplexml_load_string($value, "SimpleXMLElement", LIBXML_NOCDATA);
			}
			//combine the multiple feeds
			$array = $this->combineRss($array);
			return $array;
		} 
}

$combine = new WowMultiRss();

print_r($combine->getFeeds());

?>

