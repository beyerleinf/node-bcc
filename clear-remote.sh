#!/bin/sh

ncftp -u $FTP_USER -p $FTP_PASS beyerleinf.de << END_OF_CMD
rm -rf ./*
quit
END_OF_CMD