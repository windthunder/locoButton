<?php
// 讀取public/mp3資料夾內的檔案 輸出一個檔案 格式為 <button class="sound" data-sound="{{檔案名稱}}.mp3">{{檔案名稱}}</button>
$dir = "public/mp3";
$files = scandir($dir);
foreach ($files as $file) {
  if ($file != "." && $file != "..") {
    // 移除副檔名
    $file = pathinfo($file, PATHINFO_FILENAME);
    echo "<button class=\"sound\" data-sound=\"{$file}.mp3\">{$file}</button>\n";
  }
}