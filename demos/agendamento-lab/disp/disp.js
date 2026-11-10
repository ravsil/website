function createDispInfo(h, m) {
    let info = document.createElement("div");

    if (m == 0 && window.innerWidth < 500) {
        info.className = "left";
    } else if (m == 30 && window.innerWidth < 500) {
        info.className = "right";
    } else if (h % 2 == 1 && m == 30) {
        info.className = "right";
    }
    return info;
}

function createTimeBox(index) {
    let anchor = document.createElement("div");
    // Open the first 3 computers by default so the availability colors are immediately visible!
    anchor.className = index < 3 ? "gray collapse show" : "gray collapse";
    anchor.id = index;

    let curHour = new Date().getHours();
    let curMin = new Date().getMinutes();
    // If outside lab hours (8..17), simulate 11:15 so morning passed (gray) and afternoon is active (green/red/yellow)
    if (curHour < 8 || curHour >= 18) {
        curHour = 11;
        curMin = 15;
    }
    let line;
    for (let hour = 8; hour <= 17; hour++) {
        if (hour % 2 == 0) {
            line = document.createElement("div");
            line.className = "justify-content-around row";
            anchor.appendChild(line);
        }
        for (let min = 0; min < 60; min += 30) {
            let formattedHour = ("0" + hour).slice(-2);
            let formattedMin = ("0" + min).slice(-2);

            let wrapperDiv = document.createElement("div");
            wrapperDiv.className = "col-lg-3 col-6 mb-2";
            line.appendChild(wrapperDiv);

            let hourDiv = document.createElement("div");
            let putInfo = true;

            if ((curHour < hour) || (curHour == hour && curMin < 30 && min != 0) || (curHour == hour && curMin < 60 && min != 0)) {
                hourDiv.className = "green grower text-center";

            } else {
                hourDiv.className = "dark-gray text-center";
                putInfo = false;
            }
            hourDiv.id = `${index}_${formattedHour}:${formattedMin}`
            hourDiv.innerText = `${formattedHour}:${formattedMin}`;
            if (putInfo) { hourDiv.appendChild(createDispInfo(hour, min)); }
            wrapperDiv.appendChild(hourDiv);
        }
    }
    return anchor;
}

function turnTimeRed(i) {
    $.ajax({
        url: 'get-schedule',
        type: 'POST',
        data: {
            pcId: i,
            date: getDate(true)
        },
        success: function (response) {
            for (let index = 0; index < response.length; index++) {
                let hour = getIndexHour(response[index].id_inicio)
                let h = (hour.split(":")[0][0] == "0") ? JSON.parse(hour.split(":")[0][1]) : JSON.parse(hour.split(":")[0])
                let m = hour.split(":")[1]
                let id = (h > 9) ? `${i}_${h}:${m}` : `${i}_0${h}:${m}`;
                let endHour = getIndexHour(response[index].id_fim);
                let endH = parseInt(endHour.split(":")[0], 10);
                let endM = endHour.split(":")[1];
                let endId = (endH > 9) ? `${i}_${endH}:${endM}` : `${i}_0${endH}:${endM}`;
                let safety = 0;
                while (id != endId && safety++ < 30) {
                    let curElement = document.getElementById(id);
                    if (curElement && curElement.className != "dark-gray text-center") {
                        curElement.className = "red grower text-center";
                        if (curElement.children[0]) {
                            curElement.children[0].innerText = "Agendado por:\n" + response[index].email.split("@")[0]
                            curElement.children[0].className += " disp-info red";
                        }
                    }
                    // oscilates between 00 and 30
                    m = (m == "00") ? "30" : "00";
                    // if it's 30, h++
                    h = (m == "30") ? h : h + 1;
                    // transforms 1 into 01
                    id = (h > 9) ? `${i}_${h}:${m}` : `${i}_0${h}:${m}`
                }
            }
        },
        error: function (error) {
            alert(`[ERRO]!!! ${error.responseJSON.message}`);
        }
    });
}

function turnTimeYellow(i) {
    $.getJSON("get-class", function (classes) {
        if (!classes) return;
        for (let index = 0; index < classes.length; index++) {
            let hour = getIndexHour(classes[index].id_inicio)
            let h = (hour.split(":")[0][0] == "0") ? JSON.parse(hour.split(":")[0][1]) : JSON.parse(hour.split(":")[0])
            let m = hour.split(":")[1]
            let id = (h > 9) ? `${i}_${h}:${m}` : `${i}_0${h}:${m}`;
            let endHour = getIndexHour(classes[index].id_fim);
            let endH = parseInt(endHour.split(":")[0], 10);
            let endM = endHour.split(":")[1];
            let endId = (endH > 9) ? `${i}_${endH}:${endM}` : `${i}_0${endH}:${endM}`;
            let safety = 0;
            while (id != endId && safety++ < 30) {
                let curElement = document.getElementById(id);
                if (curElement && curElement.className != "dark-gray text-center") {
                    curElement.className = "yellow grower text-center";
                    if (curElement.children[0]) {
                        curElement.children[0].innerText = formatString(classes[index].descricao)
                        if (curElement.children[0].className.includes("red")) {
                            curElement.children[0].className = curElement.children[0].className.replace("red", "yellow");
                        } else {
                            curElement.children[0].className += " disp-info yellow";
                        }
                    }
                }
                // oscilates between 00 and 30
                m = (m == "00") ? "30" : "00";
                // if it's 30, h++
                h = (m == "30") ? h : h + 1;
                // transforms 1 into 01
                id = (h > 9) ? `${i}_${h}:${m}` : `${i}_0${h}:${m}`
            }
        }
    });
}

function createAll() {
    const curUrl = new URL(window.location.href);
    const pcParam = curUrl.searchParams.get('pc');
    const pc = pcParam !== null ? JSON.parse(pcParam) : null;
    let root = document.getElementById("root");
    let row;
    for (let i = 0; i < 30; i++) {
        if (pc != null && pc != i) {
            continue;
        }
        if (i % 3 == 0 || pc == i) {
            row = document.createElement("div");
            row.className = "row";
            root.appendChild(row);
        }
        let col = document.createElement("div");
        col.className = "col-md-4 col-sm-6 col-12";
        row.appendChild(col);

        let title = document.createElement("h3")
        title.className = "text-center soft-btn bg-dark white-text rounded";
        title.setAttribute("data-toggle", "collapse");
        title.setAttribute("data-target", `#${i}`);
        title.innerText = `Computador ${i}`;
        col.appendChild(title);
        const box = createTimeBox(i);
        if (pc === i) box.className = "gray collapse show";
        col.appendChild(box);
    }
    for (let i = 0; i < 30; i++) {
        if (pc != null && pc != i) continue;
        turnTimeRed(i);
        turnTimeYellow(i);
    }
    document.getElementsByTagName("body")[0].style = "display: block !important;";
}


window.addEventListener('load', createAll);
