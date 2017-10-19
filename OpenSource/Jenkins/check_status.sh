#!/bin/bash

JENKINS_SERVER=http://hz.liveq.net:8080/jenkins
JOB=$1
JOB_QUERY=/job/${JOB}
USER=hcdlearning:HCDhcd@123

BUILD_STATUS_QUERY=/lastBuild/api/json
JOB_STATUS_JSON=`curl -u ${USER} --silent ${JENKINS_SERVER}${JOB_QUERY}${BUILD_STATUS_QUERY}`

CURRENT_BUILD_NUMBER_QUERY=/lastBuild/buildNumber
CURRENT_BUILD_JSON=`curl -u ${USER} --silent ${JENKINS_SERVER}${JOB_QUERY}${CURRENT_BUILD_NUMBER_QUERY}`

LAST_STABLE_BUILD_NUMBER_QUERY=/lastStableBuild/buildNumber
LAST_STABLE_BUILD_JSON=`curl -u ${USER} --silent ${JENKINS_SERVER}${JOB_QUERY}${LAST_STABLE_BUILD_NUMBER_QUERY}`

check_build()
{
    RESULT=`echo "${JOB_STATUS_JSON}" | sed -n 's/.*"result":\([\"A-Za-z]*\),.*/\1/p'`
    CURRENT_BUILD_NUMBER=${CURRENT_BUILD_JSON}
    LAST_STABLE_BUILD_NUMBER=${LAST_STABLE_BUILD_JSON}

    echo "${LAST_STABLE_BUILD_NUMBER}" | grep "is not available" > /dev/null
    GREP_RETURN_CODE=$?
    if [ ${GREP_RETURN_CODE} -ne 0 ]
    then
        if [ `expr ${CURRENT_BUILD_NUMBER} - 1` -gt ${LAST_STABLE_BUILD_NUMBER} ]
        then
            echo "job name ${JOB} is not stable"
            return 1
        fi
    fi

    if [ "${RESULT}" = "null" ]
    then
        echo "${JOB} is Building"
        return 1
    elif [ "${RESULT}" = "\"SUCCESS\"" ]
    then
        echo "${JOB} ${CURRENT_BUILD_NUMBER} completed successfully."
        return 0
    elif [ "${RESULT}" = "\"FAILURE\"" ]
    then
        echo "${JOB} ${CURRENT_BUILD_NUMBER} failed"
        return 1
    else
        echo "${JOB} status unknown - '${RESULT}'"
        return 1
    fi
}

check_build
[ $? -gt 0 ] && echo "check status failed" && exit 1

echo 'end======'