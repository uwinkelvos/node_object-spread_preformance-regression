#!/bin/bash
for NV in v12.18.0 v12.18.1 v12.18.2 v13.14.0 v14.4.0 v14.5.0; do
	echo -n "$NV - " 
	/home/ulf/.nvm/versions/node/$NV/bin/node index.js 
done
