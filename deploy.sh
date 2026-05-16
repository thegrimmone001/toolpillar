#!/bin/bash
# ToolPillar Deploy - upload PHP extractor and trigger it
PHP_CODE='<?php $p=new PharData("/home/toolpill/public_html/toolpillar-deploy.tar.gz"); $p->extractTo("/home/toolpill/public_html/",null,true); unlink("/home/toolpill/public_html/toolpillar-deploy.tar.gz"); unlink(__FILE__); echo "OK";'
echo "$PHP_CODE" > /tmp/x.php
curl -m 30 -T /tmp/x.php "ftp://toolpillar.com/public_html/x.php" --user 'hello@toolpillar.com:d{L71*x&Ue@j@,,A'
curl -s "https://toolpillar.com/x.php"
