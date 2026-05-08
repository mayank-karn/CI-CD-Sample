/* global QUnit */
QUnit.config.autostart = false;

sap.ui.require(["cicd/sample/test/integration/AllJourneys"
], function () {
	QUnit.start();
});
