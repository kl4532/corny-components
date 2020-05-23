#!/bin/bash
# To create new component names run -> bash new.sh base <newComponentName> 

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

exportInPublicAPI="export \* from \'.\/lib\/components\/${replace}\/${replace}.component\'\;"
importEx="import \{ ${replace^}Component \}  from \'.\/components\/${replace}\/${replace}.component\'\;";

cd ../../
sed -i "/Imports addedByScript/ a ${importEx}" corny-components.module.ts
sed -i "/Declarations addedByScript/ a ${replace^}Component," corny-components.module.ts

cd ../
sed -i "/AddedByScript/ a ${exportInPublicAPI}" public-api.ts
echo "Component exported in public-api.ts"
