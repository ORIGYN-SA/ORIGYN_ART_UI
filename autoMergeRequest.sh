#!/bin/bash

HOST="https://${CI_SERVER_HOST}/api/v4/projects/"

BODY="{
\"project_id\": ${CI_PROJECT_ID},
\"source_branch\": \"${CI_COMMIT_BRANCH}\",
\"target_branch\": \"${TARGET_BRANCH}\",
\"remove_source_branch\": false,
\"force_remove_source_branch\": false,
\"allow_collaboration\": true,
\"subscribed\" : true,
\"title\": \"merge ${VERSION} version ${MESSAGE}\"
}";

LISTMR=`curl --silent "${HOST}${CI_PROJECT_ID}/merge_requests?state=opened" --header "PRIVATE-TOKEN:${GITLAB_TOKEN}"`;
COUNTBRANCHES=`echo ${LISTMR} | grep -o "\"source_branch\":\"${CI_COMMIT_BRANCH}\"" | wc -l`;

if [ ${COUNTBRANCHES} -eq "0" ]; then
    curl -X POST "${HOST}${CI_PROJECT_ID}/merge_requests" \
    --header "PRIVATE-TOKEN:${GITLAB_TOKEN}" \
    --header "Content-Type: application/json" \
    --data "${BODY}";

    echo "Opened a new merge request";
    exit;
fi
    echo "No new merge request opened"
