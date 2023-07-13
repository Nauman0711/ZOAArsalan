import React, { useEffect } from "react";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import GenericFormInput from "../../components/formInput/genericFormInput";
import ScreenContainer from "../../components/screenContainer";
import { dateFuction } from "../../redux/editLeads/action";
import { leadInfoAction } from "../../redux/leads/action";
const LeadsManagement = ({ navigation, route }) => {
    const { leadInfo, territoryData, surveyTimes } = useSelector((state) => state.leadsReducer);
    const { territory, region, leadType, surveyDate, surveyTime, benefitName, postalCode, town, address1, address2, phone, email, boilerName, boilerModel, boilerType, benefitType, epc, customerOwner, note } = leadInfo
    const { code, id } = route?.params
    useEffect(() => {
        leadInfoAction(id)
        navigation.setOptions({
            headerTitle: code,
        });
    }, [navigation]);
    return (
        <ScreenContainer>
            <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
                <GenericFormInput
                    title="Territory"
                    editable={false}
                    value={territoryData[territory]}
                />
                <GenericFormInput
                    title="Region"
                    editable={false}
                    value={region}
                />
                <GenericFormInput
                    title="Lead Type"
                    editable={false}
                    value={leadType}
                />
                <GenericFormInput
                    title="Survey Date"
                    editable={false}
                    value={dateFuction(surveyDate)}
                />
                <GenericFormInput
                    title="Suvey Time"
                    editable={false}
                    value={surveyTimes[surveyTime]}
                />
                <GenericFormInput
                    title="Benifited Name"
                    editable={false}
                    value={benefitName}
                />
                <GenericFormInput
                    title="Postal Code"
                    editable={false}
                    value={postalCode}
                />
                <GenericFormInput
                    title="Town"
                    editable={false}
                    value={town}
                />
                <GenericFormInput
                    title="Address Line 1"
                    editable={false}
                    value={address1}
                />
                <GenericFormInput
                    title="Address Line 2"
                    editable={false}
                    value={address2}
                />
                <GenericFormInput
                    title="Phone Number"
                    editable={false}
                    value={phone}
                />
                <GenericFormInput
                    title="Email"
                    editable={false}
                    value={email}
                />
                <GenericFormInput
                    title="Boiler Name"
                    editable={false}
                    value={boilerName}
                />
                <GenericFormInput
                    title="Boiler Model"
                    editable={false}
                    value={boilerModel}
                />
                <GenericFormInput
                    title="Boiler Type"
                    editable={false}
                    value={boilerType}
                />
                <GenericFormInput
                    title="Benifit Type"
                    editable={false}
                    value={benefitType}
                />
                <GenericFormInput
                    title="EPC"
                    editable={false}
                    value={epc}
                />
                <GenericFormInput
                    title="Is Customer Owner?"
                    editable={false}
                    value={customerOwner}
                />
                <GenericFormInput
                    title="Notes"
                    editable={false}
                    value={note}
                />
            </ScrollView>
        </ScreenContainer>
    )
}
export default LeadsManagement