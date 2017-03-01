#!/bin/sh

code_path='/home/vertica/code_search'

git_pull() {
	git_dir_name=$1

	echo `pwd`/"$git_dir_name is a git repository."
	git -C `echo` `pwd`/$git_dir_name remote | grep -n "origin"

	if test $? = 0 ;then
		echo "Begin to pull from origin:"
		echo `date`
		git -C `echo` `pwd`/$git_dir_name pull origin develop
		echo "\n"
	else
		echo "There is no remote repository."
		echo "\n"
	fi
}


for dir1 in `ls -F $code_path | grep /$`
do
	echo 'dir ' $dir1
	if [ -d "$dir1/.git" ];then
		git_pull $dir1
	else
		echo 'pass'
	fi
done
echo "All of the repositories have been updated."
