<?php

namespace Articulmedia;

use Articulmedia\Entity\Table\CrewTable;
use Core\Bitrix\Component\AjaxComponent;

class CrewComponent extends AjaxComponent {
    
    protected function parseRequest() {}

    protected function executeAjaxComponent()
    {
        $this->addResponseData([
          'page' => [
              'title' => 'Команда',
              'crewData' => [
                  'slogan' => 'СЛУШАЙТЕ<br/>УМНЫХ',
                  'items' => $this->formatCrew($this->getCrew()),
              ],
          ],
        ]);
    }
    
    private function getCrew() {
        
        $obCrewTable = new CrewTable();
        $arCrew = $obCrewTable->getList([
            'order' => ['SORT' => 'ASC'],
        ])->fetchAll();
        
        return $arCrew;
    }
    
    private function formatCrew($arCrew) {
        $arFormattedCrew = [];

        foreach ($arCrew as $arCrewMan) {
            $arFormattedCrew[] = [
                'title' => $arCrewMan['NAME'],
                'image' => \CFile::GetPath($arCrewMan['IMAGE']),
                'audio' => \CFile::GetPath($arCrewMan['AUDIO']),
                'subTitle' => $arCrewMan['POSITION'],
                'content' => [$arCrewMan['CONTENT_1'], $arCrewMan['CONTENT_2']],
            ];
        }

        return $arFormattedCrew;
    }

}