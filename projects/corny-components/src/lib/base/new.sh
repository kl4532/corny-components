#!/bin/bash
# To replace component names run -> bash replace.sh base <newComponentName> 

search=$1
replace=$2
dir=../$replace
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`

if [ -d "$dir" ]; then
    echo "${RED}ERROR:${RESET} Component with name $replace exist, choose different name"
else 
    cd ..
    cp -R ${search} ${replace}
    cd ${replace}

    for f in *
    do
        if [ "$f" == "new.sh" ] ; then
                continue;
        fi
        sed -i "s/${search^}Component/${replace^}Component/g" $f
        sed -i "s/${search}/${replace}/g" $f
        mv "$f" ${f/${search}/${replace}}
        echo "File name changed to ${f/${search}/${replace}}"
    done
    rm new.sh
fi
