#Requires AutoHotkey v2.0
i := True

CapsLock::{
    global i
    i := !i

    if(i){
        MsgBox "On"
    }
    else {
        MsgBox "Off"
    }
}

#HotIf i
    ::chairman::chair
    ::policeman::police officer
    ::fireman::firefighter
    ::stewardess::flight attendant
    ::mankind::humanity
    ::waitress::server
    ::forefathers::ancestors
    ::sportsmanship::sportsmanship
    ::manpower::workforce
    ::freshman::first-year student
    ::mailman::postal worker
    ::penmanship::handwriting
    ::salesman::salesperson
    ::craftsman::artisan
    ::congressman::representative
    ::spokesman::spokesperson
    ::cameraman::videographer
    ::middleman::intermediary
    ::postman::postal worker
    ::milkman::delivery person
    ::repairman::technician
    ::businessman::businessperson
    ::airman::aviator
    ::watchman::security guard
    ::anchorman::anchor
    ::fisherman::fisher
    ::garbageman::waste collector
    ::landlord::property owner
    ::statesman::statesperson
    ::manmade::artificial
    ::manhours::work hours
    ::manhandle::handle roughly
    ::manhunt::search operation
    ::mankind::humankind
    ::manpower::workforce
    ::middleman::intermediary
    ::ombudsman::ombudsperson
    ::workmanlike::professional-like
    ::workmanship::craftsmanship
    ::man-:eting:: dangerous
    ::man-:szed:: large-sized
    ::man-:t-man:: one-to-one
    ::manmade::synthetic
#HotIf

NumLock::{
    MsgBox "Exit Now"
    ExitApp
}