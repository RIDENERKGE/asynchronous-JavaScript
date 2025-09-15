let oneTimeTasks = [];
let monitoringTaskID;

function addOneTimeTask (func,delay)
{
    oneTimeTasks.push({function:func,delay:delay});
}
function runOneTimeTask ()
{
    for (const oneTimeTask of oneTimeTasks)
    {
        setTimeout(oneTimeTasks.function,oneTimeTask.delay);
    }
}
function startMonitoring ()
{
    console.log('Starting continuous monitoring of space station parameters...');
    monitoringTaskID = setInterval(
        function ()
        {
            console.log('Monitoring space station condition...');
            const oxygenLevel = Math.random() * 100;
            const powerStatus = Math.random() > 0.1 ? "Stable" : "Critical";
            const communicationCheck = Math.random() > 0.05 ? "All systems go" : "Communication error";
            console.log(`Oxygen Level: ${oxygenLevel.toFixed(2)}% | Power Status: ${powerStatus} | Communication: ${communicationCheck}`);
        },
        2000
    );
}
function stopMonitoring ()
{
    clearInterval(monitoringTaskID);
    console.log('contionuous monitoring stopped.');

function startCountdown (duration)
{
    let timeLeft = duration;
    console.log('Countdown started: ${timeLeft} seconds');
    if (timeLeft <= 0)
    {
        clearInterval(countdownTimeId);
        console.log('Liftoff! The rocket has successfully launched into space')
    }
}
1000
}
function scheduleMission ()
{
	startMonitoring(); 
	addOneTimeTask(function () {console.log("Pre-launch system check complete.");}, 5000);
	addOneTimeTask(stopMonitoring, 10000);
	addOneTimeTask(function () {startCountdown(10);}, 15000);

	runOneTimeTasks(); 
}

scheduleMission(); 