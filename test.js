var subject = require('./subject.js')
var mock = require('mock-fs');
subject.inc('',undefined);
subject.inc('',1);
subject.inc(0,1);
subject.inc(01,1);
subject.inc(-1,1);
subject.inc(-1,1);
subject.fileTest('path/fileExists','');
subject.fileTest('path/fileExists','path/fileExists');
subject.fileTest('path/fileExists','pathContent/file1');
subject.fileTest('path/fileExists','pathContent/file1');
mock({"path/fileExists":{},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
subject.normalize('');
subject.format('','','');
subject.blackListNumber('');
