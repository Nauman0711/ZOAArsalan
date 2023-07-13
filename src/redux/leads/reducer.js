import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const slice = createSlice({
    name: "leads",
    initialState: {
        leadsData: [],
        error: '',
        reason: '',
        refreshing: false,
        isShowModal: false,
        isShowStatusModal: false,
        currentPage: '',
        totalPages: '',
        modalData: {},
        status: '',
        leadInfo: {},
        surveyTimes: {
            1: "08:00 AM - 10:00 AM",
            2: "10:00 AM - 12:00 PM",
            3: "12:00 PM - 02:00 PM",
            4: "02:00 PM - 04:00 PM",
            5: "04:00 PM - 06:00 PM",
            6: "06:00 PM - 08:00 PM",
        },
        territoryData: {
            "AB": "Aberdeen",
            "AD": "Aberdeen",
            "DD": "Aberdeen",
            "IV": "Aberdeen",
            "KW": "Aberdeen",
            "KY": "Aberdeen",
            "PH": "Aberdeen",
            "BA": "Bristol",
            "BH": "Bristol",
            "BR": "Bristol",
            "BS": "Bristol",
            "CF": "Bristol",
            "DT": "Bristol",
            "EX": "Bristol",
            "LL": "Bristol",
            "NP": "Bristol",
            "PL": "Bristol",
            "SA": "Bristol",
            "SN": "Bristol",
            "SP": "Bristol",
            "SY": "Bristol",
            "TA": "Bristol",
            "TQ": "Bristol",
            "TR": "Bristol",
            "DG": "Glasgow",
            "EH": "Glasgow",
            "FK": "Glasgow",
            "G": "Glasgow",
            "GL": "Glasgow",
            "KA": "Glasgow",
            "ML": "Glasgow",
            "PA": "Glasgow",
            "TD": "Glasgow",
            "DH": "Leeds",
            "DL": "Leeds",
            "DN": "Leeds",
            "HG": "Leeds",
            "HU": "Leeds",
            "LD": "Leeds",
            "NE": "Leeds",
            "SR": "Leeds",
            "TS": "Leeds",
            "WF": "Leeds",
            "YO": "Leeds",
            "B": "Leicester",
            "CV": "Leicester",
            "DE": "Leicester",
            "DY": "Leicester",
            "HR": "Leicester",
            "LE": "Leicester",
            "LS": "Leicester",
            "NG": "Leicester",
            "S": "Leicester",
            "ST": "Leicester",
            "TF": "Leicester",
            "WR": "Leicester",
            "WS": "Leicester",
            "WV": "Leicester",
            "BN": "London",
            "CM": "London",
            "CO": "London",
            "CT": "London",
            "DA": "London",
            "E": "London",
            "EC": "London",
            "EN": "London",
            "IG": "London",
            "LN": "London",
            "ME": "London",
            "N": "London",
            "NW": "London",
            "RM": "London",
            "SE": "London",
            "SS": "London",
            "SW": "London",
            "TN": "London",
            "W": "London",
            "WC": "London",
            "AL": "Luton",
            "CB": "Luton",
            "CR": "Luton",
            "GU": "Luton",
            "HA": "Luton",
            "HP": "Luton",
            "IP": "Luton",
            "KT": "Luton",
            "LU": "Luton",
            "MK": "Luton",
            "NN": "Luton",
            "NR": "Luton",
            "OX": "Luton",
            "PE": "Luton",
            "PO": "Luton",
            "RG": "Luton",
            "RH": "Luton",
            "SG": "Luton",
            "SL": "Luton",
            "SM": "Luton",
            "SO": "Luton",
            "TW": "Luton",
            "UB": "Luton",
            "WD": "Luton",
            "BB": "Manchester",
            "BD": "Manchester",
            "BL": "Manchester",
            "CA": "Manchester",
            "CH": "Manchester",
            "CW": "Manchester",
            "FY": "Manchester",
            "HD": "Manchester",
            "HX": "Manchester",
            "L": "Manchester",
            "LA": "Manchester",
            "M": "Manchester",
            "MN": "Manchester",
            "OL": "Manchester",
            "PR": "Manchester",
            "SK": "Manchester",
            "WA": "Manchester",
            "WN": "Manchester"
        },
        isLoading: false,
        isLoadingLeadsStatus: false
    },
    reducers: {
        setLeadsData: ((state, action) => {
            state.leadsData = action.payload;
        }),
        addLeadsData: ((state, action) => {
            state.leadsData = [...state.leadsData, ...action.payload];
        }),
        setIsLoading: ((state, action) => {
            state.isLoading = action.payload;
        }),
        setIsLoadingLeadsStatus: ((state, action) => {
            state.isLoadingLeadsStatus = action.payload;
        }),
        setIsShowModal: ((state, action) => {
            state.isShowModal = action.payload;
        }),
        setIsStatusShowModal: ((state, action) => {
            state.isShowStatusModal = action.payload;
        }),
        setCurrentPage: ((state, action) => {
            state.currentPage = action.payload;
        }),
        setTotalPages: ((state, action) => {
            state.totalPages = action.payload;
        }),
        setModalData: ((state, action) => {
            state.modalData = action.payload;
        }),
        setReason: ((state, action) => {
            state.reason = action.payload;
        }),
        setLeadInfo: ((state, action) => {
            state.leadInfo = action.payload;
        }),
        setStatus: ((state, action) => {
            state.status = action.payload;
        }),
        setRefreshing: ((state, action) => {
            state.refreshing = action.payload;
        }),
        setErrorText: ((state, action) => {
            state.error = action.payload;
        }),
    },
});
export const { setLeadsData, setIsLoading, setErrorText, setIsShowModal, setModalData, setCurrentPage, setTotalPages, setRefreshing, setLeadInfo, addLeadsData, setStatus, setIsStatusShowModal, setReason, setIsLoadingLeadsStatus } = slice.actions;
export const leadsReducer = slice.reducer;